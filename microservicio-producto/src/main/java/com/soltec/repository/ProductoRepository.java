package com.soltec.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.soltec.entities.Producto;

@Repository
public interface ProductoRepository  extends JpaRepository<Producto, Integer>  {

}
